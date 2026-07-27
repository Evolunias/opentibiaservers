import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-pvp-server');
}

export default function Tibiara81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-pvp-server" />;
}
