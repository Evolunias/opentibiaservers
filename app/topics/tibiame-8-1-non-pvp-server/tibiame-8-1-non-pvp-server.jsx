import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-non-pvp-server');
}

export default function Tibiame81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-non-pvp-server" />;
}
