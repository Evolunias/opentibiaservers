import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-usa');
}

export default function OldSchoolSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-usa" />;
}
