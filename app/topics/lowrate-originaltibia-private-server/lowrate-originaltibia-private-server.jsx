import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-private-server');
}

export default function LowrateOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-private-server" />;
}
