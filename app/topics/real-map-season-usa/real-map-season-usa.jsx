import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-usa');
}

export default function RealMapSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-usa" />;
}
