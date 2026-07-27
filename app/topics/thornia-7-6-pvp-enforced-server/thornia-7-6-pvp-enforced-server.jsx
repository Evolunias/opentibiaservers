import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-pvp-enforced-server');
}

export default function Thornia76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-pvp-enforced-server" />;
}
