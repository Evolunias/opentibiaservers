import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-latin-america');
}

export default function PvpStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-latin-america" />;
}
