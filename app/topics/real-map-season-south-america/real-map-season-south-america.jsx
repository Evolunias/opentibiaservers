import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-south-america');
}

export default function RealMapSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-south-america" />;
}
