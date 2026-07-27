import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-usa');
}

export default function NostaltherRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-usa" />;
}
