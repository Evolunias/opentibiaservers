import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-non-pvp-server');
}

export default function Tibiame74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-non-pvp-server" />;
}
