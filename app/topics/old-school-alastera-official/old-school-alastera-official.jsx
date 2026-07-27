import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-official');
}

export default function OldSchoolAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-official" />;
}
