import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-official');
}

export default function OldSchoolAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-official" />;
}
