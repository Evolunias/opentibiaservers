import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-mexico');
}

export default function PvpEnforcedStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-mexico" />;
}
