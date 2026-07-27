import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-official');
}

export default function OldSchoolClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-official" />;
}
