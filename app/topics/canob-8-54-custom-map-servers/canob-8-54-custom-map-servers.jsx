import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-54-custom-map-servers');
}

export default function Canob854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-8-54-custom-map-servers" />;
}
