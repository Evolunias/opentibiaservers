import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-pvp-server');
}

export default function Tibiame1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-pvp-server" />;
}
