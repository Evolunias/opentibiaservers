import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-season');
}

export default function Tibia12OldSchoolSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-season" />;
}
