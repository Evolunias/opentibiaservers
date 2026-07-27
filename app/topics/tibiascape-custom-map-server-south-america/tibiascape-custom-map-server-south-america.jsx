import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-south-america');
}

export default function TibiascapeCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-south-america" />;
}
