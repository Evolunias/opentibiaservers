import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-pvp-server');
}

export default function Tibiara14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-pvp-server" />;
}
