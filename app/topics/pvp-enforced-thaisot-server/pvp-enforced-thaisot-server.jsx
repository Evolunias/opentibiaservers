import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-thaisot-server');
}

export default function PvpEnforcedThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-thaisot-server" />;
}
