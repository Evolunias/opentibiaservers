import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-pvp-enforced-server');
}

export default function Empirebr71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-pvp-enforced-server" />;
}
