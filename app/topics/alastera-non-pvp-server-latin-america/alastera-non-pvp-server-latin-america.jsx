import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-latin-america');
}

export default function AlasteraNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-latin-america" />;
}
