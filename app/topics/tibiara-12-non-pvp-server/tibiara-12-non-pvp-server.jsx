import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-non-pvp-server');
}

export default function Tibiara12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-non-pvp-server" />;
}
