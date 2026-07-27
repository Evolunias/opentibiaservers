import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-poland');
}

export default function PvpEnforcedStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-poland" />;
}
