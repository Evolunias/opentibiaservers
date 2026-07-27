import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-france');
}

export default function OldSchoolSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-france" />;
}
