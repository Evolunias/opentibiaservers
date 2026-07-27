import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-custom-map-servers');
}

export default function NtoStar100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-custom-map-servers" />;
}
