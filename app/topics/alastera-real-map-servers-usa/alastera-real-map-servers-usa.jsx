import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-usa');
}

export default function AlasteraRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-usa" />;
}
