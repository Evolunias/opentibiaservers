import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-guide');
}

export default function ActiveArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-guide" />;
}
