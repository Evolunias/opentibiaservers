import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-custom-map-server');
}

export default function NtoStar84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-custom-map-server" />;
}
