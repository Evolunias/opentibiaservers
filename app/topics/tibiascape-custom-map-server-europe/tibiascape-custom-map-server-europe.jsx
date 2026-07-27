import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-europe');
}

export default function TibiascapeCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-europe" />;
}
