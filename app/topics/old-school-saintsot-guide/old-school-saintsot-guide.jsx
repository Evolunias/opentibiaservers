import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-guide');
}

export default function OldSchoolSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-guide" />;
}
