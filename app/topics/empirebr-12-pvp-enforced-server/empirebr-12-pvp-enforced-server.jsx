import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-pvp-enforced-server');
}

export default function Empirebr12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-pvp-enforced-server" />;
}
