import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-custom-map-server');
}

export default function NtoStar100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-custom-map-server" />;
}
