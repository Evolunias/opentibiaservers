import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-custom-map-servers');
}

export default function Canob13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-13-custom-map-servers" />;
}
