import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-canada');
}

export default function CanobCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-canada" />;
}
