import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-custom-map-servers');
}

export default function NtoStar11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-custom-map-servers" />;
}
