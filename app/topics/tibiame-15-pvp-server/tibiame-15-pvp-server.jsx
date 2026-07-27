import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-pvp-server');
}

export default function Tibiame15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-pvp-server" />;
}
