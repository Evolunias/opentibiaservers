import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-pvp-enforced-server');
}

export default function Empirebr81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-pvp-enforced-server" />;
}
