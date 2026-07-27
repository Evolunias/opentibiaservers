import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-north-america');
}

export default function OldSchoolSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-north-america" />;
}
