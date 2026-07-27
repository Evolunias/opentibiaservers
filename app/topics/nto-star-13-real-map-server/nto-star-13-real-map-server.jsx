import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-real-map-server');
}

export default function NtoStar13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-real-map-server" />;
}
