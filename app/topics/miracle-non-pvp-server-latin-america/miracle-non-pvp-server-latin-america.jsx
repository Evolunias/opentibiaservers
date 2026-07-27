import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-latin-america');
}

export default function MiracleNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-latin-america" />;
}
