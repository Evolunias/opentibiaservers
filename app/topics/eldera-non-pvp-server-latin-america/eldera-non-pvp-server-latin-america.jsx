import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-latin-america');
}

export default function ElderaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-latin-america" />;
}
