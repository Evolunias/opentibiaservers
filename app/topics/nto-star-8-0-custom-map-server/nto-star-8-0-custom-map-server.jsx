import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-custom-map-server');
}

export default function NtoStar80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-custom-map-server" />;
}
