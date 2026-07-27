import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-official');
}

export default function OldSchoolMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-official" />;
}
