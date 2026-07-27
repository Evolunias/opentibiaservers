import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-pvp-server');
}

export default function Tibiame13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-pvp-server" />;
}
