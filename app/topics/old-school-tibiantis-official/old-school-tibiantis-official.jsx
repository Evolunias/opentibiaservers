import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-official');
}

export default function OldSchoolTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-official" />;
}
