import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-custom-map-servers');
}

export default function NtoStar84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-custom-map-servers" />;
}
