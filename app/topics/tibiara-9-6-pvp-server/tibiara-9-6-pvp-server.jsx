import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-pvp-server');
}

export default function Tibiara96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-pvp-server" />;
}
