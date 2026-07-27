import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-real-map-server');
}

export default function NtoStar100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-real-map-server" />;
}
