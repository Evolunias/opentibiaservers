import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-register');
}

export default function ActiveOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-register" />;
}
