import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-guide');
}

export default function TopArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-guide" />;
}
