import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-non-pvp-server');
}

export default function Tibiame11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-non-pvp-server" />;
}
