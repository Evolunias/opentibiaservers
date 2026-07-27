import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-custom-map-servers');
}

export default function Canob14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-14-custom-map-servers" />;
}
