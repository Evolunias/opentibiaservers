import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-non-pvp-server');
}

export default function Tibiame76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-non-pvp-server" />;
}
