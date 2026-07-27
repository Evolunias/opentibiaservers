import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-canada');
}

export default function OldSchoolSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-canada" />;
}
