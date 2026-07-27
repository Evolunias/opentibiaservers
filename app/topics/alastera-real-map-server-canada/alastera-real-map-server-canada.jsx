import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-canada');
}

export default function AlasteraRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-canada" />;
}
