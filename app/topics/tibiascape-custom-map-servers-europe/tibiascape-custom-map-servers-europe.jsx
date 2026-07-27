import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-europe');
}

export default function TibiascapeCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-europe" />;
}
