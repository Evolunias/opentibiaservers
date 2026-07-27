import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-europe');
}

export default function TibiascapeRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-europe" />;
}
