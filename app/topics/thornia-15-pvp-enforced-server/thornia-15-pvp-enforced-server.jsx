import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-pvp-enforced-server');
}

export default function Thornia15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-pvp-enforced-server" />;
}
