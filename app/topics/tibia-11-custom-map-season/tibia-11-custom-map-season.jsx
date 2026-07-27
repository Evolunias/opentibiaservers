import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-season');
}

export default function Tibia11CustomMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-season" />;
}
