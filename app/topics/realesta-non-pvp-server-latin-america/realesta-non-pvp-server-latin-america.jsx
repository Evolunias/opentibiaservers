import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-latin-america');
}

export default function RealestaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-latin-america" />;
}
