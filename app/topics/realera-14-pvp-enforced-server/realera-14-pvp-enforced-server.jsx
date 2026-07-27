import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-pvp-enforced-server');
}

export default function Realera14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-pvp-enforced-server" />;
}
