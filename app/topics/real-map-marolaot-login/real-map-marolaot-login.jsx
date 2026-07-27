import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-login');
}

export default function RealMapMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-login" />;
}
