import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-website');
}

export default function RealMapTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-website" />;
}
