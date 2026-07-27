import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-pvp-enforced-server');
}

export default function Empirebr15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-pvp-enforced-server" />;
}
