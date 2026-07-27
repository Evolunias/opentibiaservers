import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiascape-server');
}

export default function CustomMapTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiascape-server" />;
}
