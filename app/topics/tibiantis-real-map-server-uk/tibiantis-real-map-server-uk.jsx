import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-uk');
}

export default function TibiantisRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-uk" />;
}
