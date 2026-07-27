import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-pvp-server');
}

export default function Tibiame81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-pvp-server" />;
}
