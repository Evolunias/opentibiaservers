import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-custom-map-servers');
}

export default function Canob11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-11-custom-map-servers" />;
}
