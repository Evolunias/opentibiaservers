import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-latin-america');
}

export default function ThorniaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-latin-america" />;
}
