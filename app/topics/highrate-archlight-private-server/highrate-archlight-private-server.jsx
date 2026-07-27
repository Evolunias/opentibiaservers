import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-private-server');
}

export default function HighrateArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-private-server" />;
}
