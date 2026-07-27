import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-real-map-season');
}

export default function Tibia80RealMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-real-map-season" />;
}
