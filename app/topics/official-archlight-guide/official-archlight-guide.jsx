import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-guide');
}

export default function OfficialArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-guide" />;
}
