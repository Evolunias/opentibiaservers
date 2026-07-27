import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-brazil');
}

export default function AlasteraRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-brazil" />;
}
