import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-pvp-enforced-server');
}

export default function Thornia96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-pvp-enforced-server" />;
}
