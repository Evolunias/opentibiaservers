import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-non-pvp-server');
}

export default function Tibiara1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-non-pvp-server" />;
}
