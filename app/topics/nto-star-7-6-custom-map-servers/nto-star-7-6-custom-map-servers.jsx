import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-custom-map-servers');
}

export default function NtoStar76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-custom-map-servers" />;
}
