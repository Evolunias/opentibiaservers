import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-latin-america');
}

export default function BlazeraNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-latin-america" />;
}
