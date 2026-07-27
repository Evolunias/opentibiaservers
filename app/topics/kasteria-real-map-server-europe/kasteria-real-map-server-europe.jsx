import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-europe');
}

export default function KasteriaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-europe" />;
}
