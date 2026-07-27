import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-custom-map-servers');
}

export default function Canob74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-custom-map-servers" />;
}
