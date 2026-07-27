import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-brazil');
}

export default function AlasteraRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-brazil" />;
}
