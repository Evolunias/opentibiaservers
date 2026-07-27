import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-pvp-enforced-server');
}

export default function Thaisot100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-pvp-enforced-server" />;
}
