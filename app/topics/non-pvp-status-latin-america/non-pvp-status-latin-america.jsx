import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-latin-america');
}

export default function NonPvpStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-latin-america" />;
}
