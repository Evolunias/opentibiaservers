import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot');
}

export default function RealMapMarolaotKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot" />;
}
