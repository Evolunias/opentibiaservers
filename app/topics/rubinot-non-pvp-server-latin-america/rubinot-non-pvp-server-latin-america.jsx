import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-latin-america');
}

export default function RubinotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-latin-america" />;
}
