import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-season');
}

export default function Tibia12CustomMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-season" />;
}
