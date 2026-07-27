import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-latin-america');
}

export default function CanobCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-latin-america" />;
}
