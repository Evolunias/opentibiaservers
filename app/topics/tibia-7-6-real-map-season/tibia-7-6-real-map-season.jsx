import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-real-map-season');
}

export default function Tibia76RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-real-map-season" />;
}
