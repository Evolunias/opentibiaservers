import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-uk');
}

export default function TibiascapeCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-uk" />;
}
