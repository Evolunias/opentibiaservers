import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-6-custom-map-servers');
}

export default function NtoStar86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-6-custom-map-servers" />;
}
