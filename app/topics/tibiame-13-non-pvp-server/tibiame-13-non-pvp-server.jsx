import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-non-pvp-server');
}

export default function Tibiame13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-non-pvp-server" />;
}
