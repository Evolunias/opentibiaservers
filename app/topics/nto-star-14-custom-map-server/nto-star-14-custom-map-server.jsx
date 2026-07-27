import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-custom-map-server');
}

export default function NtoStar14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-custom-map-server" />;
}
