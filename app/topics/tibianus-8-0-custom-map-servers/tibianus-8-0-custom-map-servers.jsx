import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-custom-map-servers');
}

export default function Tibianus80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-custom-map-servers" />;
}
