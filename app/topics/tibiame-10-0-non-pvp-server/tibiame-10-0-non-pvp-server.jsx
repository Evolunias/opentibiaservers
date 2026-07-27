import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-non-pvp-server');
}

export default function Tibiame100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-non-pvp-server" />;
}
