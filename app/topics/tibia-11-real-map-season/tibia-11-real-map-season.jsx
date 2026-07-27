import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-season');
}

export default function Tibia11RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-season" />;
}
