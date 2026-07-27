import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-latin-america');
}

export default function MidhemPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-latin-america" />;
}
