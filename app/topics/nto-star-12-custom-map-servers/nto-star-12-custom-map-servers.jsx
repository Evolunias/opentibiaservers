import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-custom-map-servers');
}

export default function NtoStar12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-custom-map-servers" />;
}
