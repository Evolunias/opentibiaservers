import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-usa');
}

export default function TibiantisRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-usa" />;
}
