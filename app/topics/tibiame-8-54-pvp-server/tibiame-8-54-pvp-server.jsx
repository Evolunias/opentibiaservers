import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-pvp-server');
}

export default function Tibiame854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-pvp-server" />;
}
