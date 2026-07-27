import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-north-america');
}

export default function CanobCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-north-america" />;
}
