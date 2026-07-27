import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-pvp-server');
}

export default function Tibiame12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-pvp-server" />;
}
