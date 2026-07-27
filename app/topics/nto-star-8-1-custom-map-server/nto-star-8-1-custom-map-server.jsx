import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-1-custom-map-server');
}

export default function NtoStar81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-1-custom-map-server" />;
}
