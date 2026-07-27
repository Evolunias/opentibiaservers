import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-non-pvp-server');
}

export default function Tibiara76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-non-pvp-server" />;
}
