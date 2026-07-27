import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-website');
}

export default function RealMapTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-website" />;
}
