import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-latin-america');
}

export default function PvpEnforcedStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-latin-america" />;
}
