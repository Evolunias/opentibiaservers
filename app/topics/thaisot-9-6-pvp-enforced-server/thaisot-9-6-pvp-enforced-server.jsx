import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-pvp-enforced-server');
}

export default function Thaisot96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-pvp-enforced-server" />;
}
