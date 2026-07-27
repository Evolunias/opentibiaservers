import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-europe');
}

export default function TibiantisRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-europe" />;
}
