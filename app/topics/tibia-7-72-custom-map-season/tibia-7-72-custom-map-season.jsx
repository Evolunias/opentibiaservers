import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-custom-map-season');
}

export default function Tibia772CustomMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-custom-map-season" />;
}
