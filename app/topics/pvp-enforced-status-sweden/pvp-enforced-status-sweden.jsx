import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-sweden');
}

export default function PvpEnforcedStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-sweden" />;
}
