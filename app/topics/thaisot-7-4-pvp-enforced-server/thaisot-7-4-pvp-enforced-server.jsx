import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-pvp-enforced-server');
}

export default function Thaisot74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-pvp-enforced-server" />;
}
