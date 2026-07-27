import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-argentina');
}

export default function PvpEnforcedStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-argentina" />;
}
