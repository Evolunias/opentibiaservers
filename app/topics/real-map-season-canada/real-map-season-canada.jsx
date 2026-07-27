import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-canada');
}

export default function RealMapSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-canada" />;
}
