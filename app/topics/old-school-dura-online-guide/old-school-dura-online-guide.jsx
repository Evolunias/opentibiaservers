import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-guide');
}

export default function OldSchoolDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-guide" />;
}
