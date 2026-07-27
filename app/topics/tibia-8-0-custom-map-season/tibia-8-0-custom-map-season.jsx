import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-custom-map-season');
}

export default function Tibia80CustomMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-custom-map-season" />;
}
