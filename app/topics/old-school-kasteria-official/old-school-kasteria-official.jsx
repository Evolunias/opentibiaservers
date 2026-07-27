import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-official');
}

export default function OldSchoolKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-official" />;
}
