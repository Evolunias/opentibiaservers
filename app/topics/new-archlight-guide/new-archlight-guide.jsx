import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-guide');
}

export default function NewArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-guide" />;
}
