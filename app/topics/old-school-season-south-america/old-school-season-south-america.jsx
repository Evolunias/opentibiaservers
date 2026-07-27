import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-south-america');
}

export default function OldSchoolSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-south-america" />;
}
