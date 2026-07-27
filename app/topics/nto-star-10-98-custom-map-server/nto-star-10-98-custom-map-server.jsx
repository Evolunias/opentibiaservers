import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-98-custom-map-server');
}

export default function NtoStar1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-98-custom-map-server" />;
}
