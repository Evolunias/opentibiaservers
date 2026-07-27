import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-pvp-enforced-server');
}

export default function Thaisot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-pvp-enforced-server" />;
}
