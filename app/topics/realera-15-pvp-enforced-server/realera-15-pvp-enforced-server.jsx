import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-pvp-enforced-server');
}

export default function Realera15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-pvp-enforced-server" />;
}
