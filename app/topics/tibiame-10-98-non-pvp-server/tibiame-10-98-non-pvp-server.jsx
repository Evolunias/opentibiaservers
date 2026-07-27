import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-non-pvp-server');
}

export default function Tibiame1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-non-pvp-server" />;
}
