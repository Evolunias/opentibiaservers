import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-custom-map-servers');
}

export default function Tibianus81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-custom-map-servers" />;
}
