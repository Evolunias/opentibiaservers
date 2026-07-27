import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-season');
}

export default function Tibia13RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-season" />;
}
