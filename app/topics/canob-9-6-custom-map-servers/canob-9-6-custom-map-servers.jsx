import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-custom-map-servers');
}

export default function Canob96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-custom-map-servers" />;
}
