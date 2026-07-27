import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-latin-america');
}

export default function RealeraNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-latin-america" />;
}
