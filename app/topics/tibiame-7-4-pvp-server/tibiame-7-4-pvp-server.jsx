import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-pvp-server');
}

export default function Tibiame74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-pvp-server" />;
}
