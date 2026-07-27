import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-usa');
}

export default function PvpEnforcedStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-usa" />;
}
