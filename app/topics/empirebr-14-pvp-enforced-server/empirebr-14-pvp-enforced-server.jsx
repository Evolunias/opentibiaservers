import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-pvp-enforced-server');
}

export default function Empirebr14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-pvp-enforced-server" />;
}
