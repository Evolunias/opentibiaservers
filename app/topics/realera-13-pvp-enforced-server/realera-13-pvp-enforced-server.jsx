import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-pvp-enforced-server');
}

export default function Realera13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-pvp-enforced-server" />;
}
