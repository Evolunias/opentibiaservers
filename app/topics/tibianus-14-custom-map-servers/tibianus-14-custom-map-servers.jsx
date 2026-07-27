import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-custom-map-servers');
}

export default function Tibianus14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-custom-map-servers" />;
}
