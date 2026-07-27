import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-canob-server');
}

export default function CustomMapCanobServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-canob-server" />;
}
