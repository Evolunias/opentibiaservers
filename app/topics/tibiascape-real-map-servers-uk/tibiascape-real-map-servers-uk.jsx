import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-uk');
}

export default function TibiascapeRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-uk" />;
}
