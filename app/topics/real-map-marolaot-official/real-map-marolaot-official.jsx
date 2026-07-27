import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-official');
}

export default function RealMapMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-official" />;
}
