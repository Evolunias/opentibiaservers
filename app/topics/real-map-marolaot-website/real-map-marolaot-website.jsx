import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-website');
}

export default function RealMapMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-website" />;
}
