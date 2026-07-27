import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-non-pvp-server');
}

export default function Tibiame80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-non-pvp-server" />;
}
