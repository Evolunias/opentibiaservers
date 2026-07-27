import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-ots');
}

export default function RealMapMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-ots" />;
}
