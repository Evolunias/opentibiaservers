import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-latin-america');
}

export default function ThaisotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-latin-america" />;
}
