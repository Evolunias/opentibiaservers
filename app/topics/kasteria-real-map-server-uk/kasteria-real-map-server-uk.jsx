import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-uk');
}

export default function KasteriaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-uk" />;
}
