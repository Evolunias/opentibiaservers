import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibiame-server');
}

export default function PvpEnforcedTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibiame-server" />;
}
