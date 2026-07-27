import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-pvp-enforced-server');
}

export default function Realera11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-pvp-enforced-server" />;
}
