import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-pvp-enforced-server');
}

export default function Thornia772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-pvp-enforced-server" />;
}
