import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-72-pvp-server');
}

export default function Tibiame772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-72-pvp-server" />;
}
