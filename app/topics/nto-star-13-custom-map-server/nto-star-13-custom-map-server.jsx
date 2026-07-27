import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-custom-map-server');
}

export default function NtoStar13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-custom-map-server" />;
}
