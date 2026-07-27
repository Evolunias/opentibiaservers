import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-pvp-server');
}

export default function Tibiame14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-pvp-server" />;
}
