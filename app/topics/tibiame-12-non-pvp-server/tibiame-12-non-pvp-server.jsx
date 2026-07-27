import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-non-pvp-server');
}

export default function Tibiame12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-non-pvp-server" />;
}
