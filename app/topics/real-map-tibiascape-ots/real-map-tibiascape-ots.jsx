import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-ots');
}

export default function RealMapTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-ots" />;
}
