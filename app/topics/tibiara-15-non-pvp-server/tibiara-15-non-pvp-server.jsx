import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-non-pvp-server');
}

export default function Tibiara15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-non-pvp-server" />;
}
