import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-real-map-season');
}

export default function Tibia81RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-real-map-season" />;
}
