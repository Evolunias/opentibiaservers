import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-custom-map-server');
}

export default function NtoStar11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-custom-map-server" />;
}
