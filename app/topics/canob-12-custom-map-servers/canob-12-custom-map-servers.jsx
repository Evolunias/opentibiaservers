import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-custom-map-servers');
}

export default function Canob12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-12-custom-map-servers" />;
}
