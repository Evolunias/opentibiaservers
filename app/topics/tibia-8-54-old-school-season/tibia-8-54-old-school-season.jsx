import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-season');
}

export default function Tibia854OldSchoolSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-season" />;
}
