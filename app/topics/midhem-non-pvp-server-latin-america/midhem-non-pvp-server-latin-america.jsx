import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-latin-america');
}

export default function MidhemNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-latin-america" />;
}
