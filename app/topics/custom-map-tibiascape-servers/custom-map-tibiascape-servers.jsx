import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiascape-servers');
}

export default function CustomMapTibiascapeServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiascape-servers" />;
}
