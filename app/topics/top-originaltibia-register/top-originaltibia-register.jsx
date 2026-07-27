import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-register');
}

export default function TopOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-register" />;
}
