import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-canada');
}

export default function TibiascapeCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-canada" />;
}
