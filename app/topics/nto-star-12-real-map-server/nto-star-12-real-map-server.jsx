import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-real-map-server');
}

export default function NtoStar12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-real-map-server" />;
}
