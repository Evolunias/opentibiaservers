import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-latin-america');
}

export default function VenoreotPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-latin-america" />;
}
