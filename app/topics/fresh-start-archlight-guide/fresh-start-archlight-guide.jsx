import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-guide');
}

export default function FreshStartArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-guide" />;
}
