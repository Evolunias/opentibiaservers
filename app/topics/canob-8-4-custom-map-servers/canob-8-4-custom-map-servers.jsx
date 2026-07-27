import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-custom-map-servers');
}

export default function Canob84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-custom-map-servers" />;
}
