import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-uk');
}

export default function PvpEnforcedStatusUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-uk" />;
}
