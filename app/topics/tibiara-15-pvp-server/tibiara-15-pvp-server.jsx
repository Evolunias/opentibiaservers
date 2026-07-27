import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-pvp-server');
}

export default function Tibiara15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-pvp-server" />;
}
