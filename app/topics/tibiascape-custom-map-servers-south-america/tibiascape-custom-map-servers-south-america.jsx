import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-south-america');
}

export default function TibiascapeCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-south-america" />;
}
