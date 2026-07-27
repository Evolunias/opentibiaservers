import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-custom-map-servers');
}

export default function Tibianus100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-custom-map-servers" />;
}
