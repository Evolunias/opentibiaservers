import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-ots');
}

export default function HighrateArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-ots" />;
}
