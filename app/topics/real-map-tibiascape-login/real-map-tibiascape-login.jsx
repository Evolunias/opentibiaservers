import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-login');
}

export default function RealMapTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-login" />;
}
