import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-pvp-enforced-server');
}

export default function Thornia14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-pvp-enforced-server" />;
}
