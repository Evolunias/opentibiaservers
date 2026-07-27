import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-old-school-season');
}

export default function Tibia772OldSchoolSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-old-school-season" />;
}
