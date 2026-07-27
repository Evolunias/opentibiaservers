import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-custom-map-servers');
}

export default function Canob15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-15-custom-map-servers" />;
}
