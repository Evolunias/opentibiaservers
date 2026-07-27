import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-guide');
}

export default function OldSchoolArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-guide" />;
}
