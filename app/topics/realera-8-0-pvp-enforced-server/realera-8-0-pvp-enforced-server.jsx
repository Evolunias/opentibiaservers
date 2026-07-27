import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-pvp-enforced-server');
}

export default function Realera80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-pvp-enforced-server" />;
}
