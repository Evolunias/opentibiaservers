import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-rubinot-server');
}

export default function PvpRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-rubinot-server" />;
}
