import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-season');
}

export default function Tibia81OldSchoolSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-season" />;
}
