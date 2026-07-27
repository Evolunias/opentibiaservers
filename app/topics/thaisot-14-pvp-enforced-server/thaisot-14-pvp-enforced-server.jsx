import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-pvp-enforced-server');
}

export default function Thaisot14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-pvp-enforced-server" />;
}
