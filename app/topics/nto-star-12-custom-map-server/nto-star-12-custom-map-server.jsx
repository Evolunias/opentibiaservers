import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-custom-map-server');
}

export default function NtoStar12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-custom-map-server" />;
}
