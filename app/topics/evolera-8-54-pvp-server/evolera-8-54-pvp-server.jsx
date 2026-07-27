import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-54-pvp-server');
}

export default function Evolera854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-54-pvp-server" />;
}
