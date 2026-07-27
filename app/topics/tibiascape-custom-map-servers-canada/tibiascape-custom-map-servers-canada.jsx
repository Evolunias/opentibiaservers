import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-canada');
}

export default function TibiascapeCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-canada" />;
}
