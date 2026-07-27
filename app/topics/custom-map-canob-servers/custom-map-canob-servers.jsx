import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-canob-servers');
}

export default function CustomMapCanobServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-canob-servers" />;
}
