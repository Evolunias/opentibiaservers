import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-season');
}

export default function Tibia14RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-season" />;
}
