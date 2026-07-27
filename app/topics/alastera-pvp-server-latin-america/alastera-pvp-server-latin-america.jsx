import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-latin-america');
}

export default function AlasteraPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-latin-america" />;
}
