import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-season');
}

export default function Tibia96RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-season" />;
}
