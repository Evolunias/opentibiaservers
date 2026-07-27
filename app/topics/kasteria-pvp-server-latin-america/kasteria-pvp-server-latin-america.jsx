import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-latin-america');
}

export default function KasteriaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-latin-america" />;
}
