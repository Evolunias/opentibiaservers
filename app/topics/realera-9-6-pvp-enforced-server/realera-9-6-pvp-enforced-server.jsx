import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-pvp-enforced-server');
}

export default function Realera96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-pvp-enforced-server" />;
}
