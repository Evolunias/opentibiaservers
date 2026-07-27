import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-1-custom-map-servers');
}

export default function NtoStar71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-1-custom-map-servers" />;
}
