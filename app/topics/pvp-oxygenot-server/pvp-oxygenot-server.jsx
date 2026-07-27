import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-oxygenot-server');
}

export default function PvpOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-oxygenot-server" />;
}
