import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-custom-map-server');
}

export default function NtoStar74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-custom-map-server" />;
}
