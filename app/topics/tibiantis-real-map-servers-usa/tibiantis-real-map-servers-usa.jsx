import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-usa');
}

export default function TibiantisRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-usa" />;
}
