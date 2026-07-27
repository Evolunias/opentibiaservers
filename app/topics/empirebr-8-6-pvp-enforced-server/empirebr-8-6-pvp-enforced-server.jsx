import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-pvp-enforced-server');
}

export default function Empirebr86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-pvp-enforced-server" />;
}
