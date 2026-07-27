import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-latin-america');
}

export default function ThaisotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-latin-america" />;
}
