import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-pvp-enforced-server');
}

export default function Realera76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-pvp-enforced-server" />;
}
