import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-latin-america');
}

export default function KasteriaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-latin-america" />;
}
