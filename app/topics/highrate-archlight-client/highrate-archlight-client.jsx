import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-client');
}

export default function HighrateArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-client" />;
}
