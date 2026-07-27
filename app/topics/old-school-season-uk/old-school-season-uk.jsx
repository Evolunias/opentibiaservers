import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-uk');
}

export default function OldSchoolSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-uk" />;
}
