import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-guide');
}

export default function BestArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-guide" />;
}
