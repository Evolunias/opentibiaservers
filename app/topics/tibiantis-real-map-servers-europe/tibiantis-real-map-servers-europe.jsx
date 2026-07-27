import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-europe');
}

export default function TibiantisRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-europe" />;
}
