import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-1-custom-map-servers');
}

export default function NtoStar81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-1-custom-map-servers" />;
}
