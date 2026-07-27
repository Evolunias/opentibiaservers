import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-mexico');
}

export default function RealMapSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-mexico" />;
}
