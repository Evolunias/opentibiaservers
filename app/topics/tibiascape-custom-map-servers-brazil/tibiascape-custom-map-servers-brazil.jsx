import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-brazil');
}

export default function TibiascapeCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-brazil" />;
}
