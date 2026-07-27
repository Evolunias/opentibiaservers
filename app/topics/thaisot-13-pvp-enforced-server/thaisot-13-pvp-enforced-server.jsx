import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-pvp-enforced-server');
}

export default function Thaisot13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-pvp-enforced-server" />;
}
