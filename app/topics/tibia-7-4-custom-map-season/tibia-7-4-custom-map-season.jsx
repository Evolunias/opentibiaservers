import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-custom-map-season');
}

export default function Tibia74CustomMapSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-custom-map-season" />;
}
