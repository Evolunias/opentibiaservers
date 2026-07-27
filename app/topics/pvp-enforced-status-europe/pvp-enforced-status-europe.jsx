import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-europe');
}

export default function PvpEnforcedStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-europe" />;
}
