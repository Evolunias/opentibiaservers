import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-latin-america');
}

export default function VenoreotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-latin-america" />;
}
