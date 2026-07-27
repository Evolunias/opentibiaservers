import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-real-map-server');
}

export default function BestTibiaRealMapServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-real-map-server" />;
}
