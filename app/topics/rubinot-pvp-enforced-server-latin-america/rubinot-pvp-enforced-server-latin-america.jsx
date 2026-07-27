import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-latin-america');
}

export default function RubinotPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-latin-america" />;
}
