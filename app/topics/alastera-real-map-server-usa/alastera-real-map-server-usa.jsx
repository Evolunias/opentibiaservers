import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-usa');
}

export default function AlasteraRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-usa" />;
}
