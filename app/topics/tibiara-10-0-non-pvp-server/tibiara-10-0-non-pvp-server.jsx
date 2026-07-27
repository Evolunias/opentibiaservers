import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-non-pvp-server');
}

export default function Tibiara100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-non-pvp-server" />;
}
