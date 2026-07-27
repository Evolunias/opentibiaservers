import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-south-america');
}

export default function PvpEnforcedStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-south-america" />;
}
