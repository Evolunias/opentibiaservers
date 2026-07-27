import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-website');
}

export default function RealMapTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-website" />;
}
