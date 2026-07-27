import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-pvp-enforced-server');
}

export default function Thornia854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-pvp-enforced-server" />;
}
