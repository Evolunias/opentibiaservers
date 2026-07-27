import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-guide');
}

export default function HighrateArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-guide" />;
}
