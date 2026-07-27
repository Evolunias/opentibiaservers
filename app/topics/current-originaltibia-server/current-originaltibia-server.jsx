import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-server');
}

export default function CurrentOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-server" />;
}
