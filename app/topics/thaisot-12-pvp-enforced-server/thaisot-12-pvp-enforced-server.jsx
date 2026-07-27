import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-pvp-enforced-server');
}

export default function Thaisot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-pvp-enforced-server" />;
}
