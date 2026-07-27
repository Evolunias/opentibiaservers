import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-website');
}

export default function RealMapTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-website" />;
}
