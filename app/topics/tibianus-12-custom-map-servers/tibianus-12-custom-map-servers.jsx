import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-custom-map-servers');
}

export default function Tibianus12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-custom-map-servers" />;
}
