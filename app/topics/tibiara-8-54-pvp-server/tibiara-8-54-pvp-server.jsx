import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-54-pvp-server');
}

export default function Tibiara854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-54-pvp-server" />;
}
