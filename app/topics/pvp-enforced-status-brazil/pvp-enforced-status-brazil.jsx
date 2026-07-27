import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-brazil');
}

export default function PvpEnforcedStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-brazil" />;
}
