import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-pvp-enforced-server');
}

export default function Thaisot86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-pvp-enforced-server" />;
}
