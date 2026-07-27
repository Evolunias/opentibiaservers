import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-custom-map-servers');
}

export default function Canob100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-custom-map-servers" />;
}
