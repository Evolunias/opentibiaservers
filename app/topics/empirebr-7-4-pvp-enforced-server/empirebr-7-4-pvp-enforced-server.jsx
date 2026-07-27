import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-pvp-enforced-server');
}

export default function Empirebr74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-pvp-enforced-server" />;
}
