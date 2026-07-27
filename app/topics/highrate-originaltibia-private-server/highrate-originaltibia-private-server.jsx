import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-private-server');
}

export default function HighrateOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-private-server" />;
}
