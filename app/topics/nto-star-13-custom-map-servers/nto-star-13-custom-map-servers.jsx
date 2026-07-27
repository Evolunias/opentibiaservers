import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-custom-map-servers');
}

export default function NtoStar13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-custom-map-servers" />;
}
