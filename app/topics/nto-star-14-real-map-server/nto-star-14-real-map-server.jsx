import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-real-map-server');
}

export default function NtoStar14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-real-map-server" />;
}
