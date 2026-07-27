import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-register');
}

export default function CurrentOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-register" />;
}
