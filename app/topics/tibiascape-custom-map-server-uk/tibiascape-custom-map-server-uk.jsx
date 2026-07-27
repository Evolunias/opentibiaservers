import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-uk');
}

export default function TibiascapeCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-uk" />;
}
