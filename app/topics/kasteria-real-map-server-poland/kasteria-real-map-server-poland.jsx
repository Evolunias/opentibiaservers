import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-poland');
}

export default function KasteriaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-poland" />;
}
