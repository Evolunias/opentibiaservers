import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-brazil');
}

export default function TibiascapeCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-brazil" />;
}
