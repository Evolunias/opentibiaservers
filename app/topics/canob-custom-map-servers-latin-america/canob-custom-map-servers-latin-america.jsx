import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-latin-america');
}

export default function CanobCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-latin-america" />;
}
