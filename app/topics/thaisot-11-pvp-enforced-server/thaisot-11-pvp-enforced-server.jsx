import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-pvp-enforced-server');
}

export default function Thaisot11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-pvp-enforced-server" />;
}
