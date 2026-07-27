import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-non-pvp-server');
}

export default function Tibiara11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-non-pvp-server" />;
}
