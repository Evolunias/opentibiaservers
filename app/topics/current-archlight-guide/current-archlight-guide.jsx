import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-guide');
}

export default function CurrentArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-guide" />;
}
