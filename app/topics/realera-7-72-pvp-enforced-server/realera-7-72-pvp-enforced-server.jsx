import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-72-pvp-enforced-server');
}

export default function Realera772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-72-pvp-enforced-server" />;
}
