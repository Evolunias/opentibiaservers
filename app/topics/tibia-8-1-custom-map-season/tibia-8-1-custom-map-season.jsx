import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-season');
}

export default function Tibia81CustomMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-season" />;
}
