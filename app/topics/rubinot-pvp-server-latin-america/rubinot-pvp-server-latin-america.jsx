import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-latin-america');
}

export default function RubinotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-latin-america" />;
}
