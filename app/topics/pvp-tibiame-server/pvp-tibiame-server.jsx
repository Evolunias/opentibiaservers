import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibiame-server');
}

export default function PvpTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibiame-server" />;
}
