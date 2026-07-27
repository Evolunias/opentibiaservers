import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-north-america');
}

export default function PvpEnforcedStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-north-america" />;
}
