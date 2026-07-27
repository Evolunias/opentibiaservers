import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-pvp-server');
}

export default function Tibiara772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-pvp-server" />;
}
