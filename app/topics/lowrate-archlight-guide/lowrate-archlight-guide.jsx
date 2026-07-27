import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-guide');
}

export default function LowrateArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-guide" />;
}
