import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-uk');
}

export default function TibijkaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-uk" />;
}
