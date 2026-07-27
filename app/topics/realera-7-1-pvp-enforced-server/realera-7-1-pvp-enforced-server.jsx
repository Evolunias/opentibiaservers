import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-pvp-enforced-server');
}

export default function Realera71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-pvp-enforced-server" />;
}
