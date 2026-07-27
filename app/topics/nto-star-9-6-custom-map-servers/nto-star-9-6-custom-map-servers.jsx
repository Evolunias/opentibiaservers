import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-9-6-custom-map-servers');
}

export default function NtoStar96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-9-6-custom-map-servers" />;
}
