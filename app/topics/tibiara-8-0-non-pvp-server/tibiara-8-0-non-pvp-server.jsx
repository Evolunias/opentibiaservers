import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-non-pvp-server');
}

export default function Tibiara80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-non-pvp-server" />;
}
