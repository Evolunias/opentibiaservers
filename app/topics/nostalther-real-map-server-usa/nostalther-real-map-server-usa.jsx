import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-usa');
}

export default function NostaltherRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-usa" />;
}
