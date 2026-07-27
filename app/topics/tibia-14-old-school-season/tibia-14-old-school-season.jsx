import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-season');
}

export default function Tibia14OldSchoolSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-season" />;
}
