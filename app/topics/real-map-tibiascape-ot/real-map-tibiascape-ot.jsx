import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-ot');
}

export default function RealMapTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-ot" />;
}
