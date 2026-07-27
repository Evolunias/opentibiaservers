import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-germany');
}

export default function PvpEnforcedStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-germany" />;
}
