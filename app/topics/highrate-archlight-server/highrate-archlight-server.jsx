import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-server');
}

export default function HighrateArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-server" />;
}
