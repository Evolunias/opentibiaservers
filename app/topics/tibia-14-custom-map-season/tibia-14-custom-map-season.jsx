import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-season');
}

export default function Tibia14CustomMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-season" />;
}
