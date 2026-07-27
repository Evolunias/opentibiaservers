import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-real-map-server');
}

export default function NtoStar80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-real-map-server" />;
}
