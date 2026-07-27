import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-old-school-season');
}

export default function Tibia86OldSchoolSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-old-school-season" />;
}
