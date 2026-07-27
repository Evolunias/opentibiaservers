import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-pvp-server');
}

export default function Tibiara84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-pvp-server" />;
}
