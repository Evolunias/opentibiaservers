import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-canada');
}

export default function AlasteraRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-canada" />;
}
