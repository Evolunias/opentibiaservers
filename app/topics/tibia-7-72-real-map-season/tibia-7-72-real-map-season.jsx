import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-real-map-season');
}

export default function Tibia772RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-real-map-season" />;
}
