import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-latin-america');
}

export default function VenoreotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-latin-america" />;
}
