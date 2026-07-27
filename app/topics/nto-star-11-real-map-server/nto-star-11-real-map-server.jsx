import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-real-map-server');
}

export default function NtoStar11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-real-map-server" />;
}
