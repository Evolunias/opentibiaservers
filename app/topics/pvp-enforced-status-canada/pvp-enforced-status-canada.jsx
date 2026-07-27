import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-canada');
}

export default function PvpEnforcedStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-canada" />;
}
