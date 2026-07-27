import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-pvp-enforced-server');
}

export default function Realera1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-pvp-enforced-server" />;
}
