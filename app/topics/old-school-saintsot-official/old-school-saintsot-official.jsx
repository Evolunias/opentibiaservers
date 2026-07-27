import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-official');
}

export default function OldSchoolSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-official" />;
}
