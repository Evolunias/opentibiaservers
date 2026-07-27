import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-website');
}

export default function RealMapTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-website" />;
}
