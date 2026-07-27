import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-season');
}

export default function Tibia15RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-season" />;
}
