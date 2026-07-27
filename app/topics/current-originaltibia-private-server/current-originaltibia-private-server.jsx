import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-private-server');
}

export default function CurrentOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-private-server" />;
}
