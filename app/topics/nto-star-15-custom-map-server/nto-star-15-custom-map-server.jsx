import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-custom-map-server');
}

export default function NtoStar15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-custom-map-server" />;
}
