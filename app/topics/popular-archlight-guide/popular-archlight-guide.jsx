import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-guide');
}

export default function PopularArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-guide" />;
}
