import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-guide');
}

export default function CustomArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-guide" />;
}
