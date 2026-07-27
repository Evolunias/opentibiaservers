import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-non-pvp-server');
}

export default function Tibiame15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-non-pvp-server" />;
}
