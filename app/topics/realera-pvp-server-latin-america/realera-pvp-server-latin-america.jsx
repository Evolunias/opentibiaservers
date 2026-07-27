import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-latin-america');
}

export default function RealeraPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-latin-america" />;
}
