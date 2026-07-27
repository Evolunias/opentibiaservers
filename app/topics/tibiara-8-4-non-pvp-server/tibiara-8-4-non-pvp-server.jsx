import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-non-pvp-server');
}

export default function Tibiara84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-non-pvp-server" />;
}
