import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-europe');
}

export default function KasteriaRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-europe" />;
}
