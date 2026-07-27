import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-pvp-enforced-server');
}

export default function Thornia11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-pvp-enforced-server" />;
}
