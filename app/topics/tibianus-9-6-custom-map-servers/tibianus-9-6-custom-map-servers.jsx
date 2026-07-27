import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-custom-map-servers');
}

export default function Tibianus96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-custom-map-servers" />;
}
