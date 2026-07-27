import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-rubinot-server');
}

export default function PvpEnforcedRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-rubinot-server" />;
}
