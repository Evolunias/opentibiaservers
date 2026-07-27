import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-9-6-custom-map-server');
}

export default function NtoStar96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-9-6-custom-map-server" />;
}
