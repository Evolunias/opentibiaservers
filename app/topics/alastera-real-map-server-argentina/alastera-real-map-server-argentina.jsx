import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-argentina');
}

export default function AlasteraRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-argentina" />;
}
