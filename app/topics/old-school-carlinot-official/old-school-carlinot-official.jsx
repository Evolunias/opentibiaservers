import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-official');
}

export default function OldSchoolCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-official" />;
}
