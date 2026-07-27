import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-argentina');
}

export default function AlasteraRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-argentina" />;
}
