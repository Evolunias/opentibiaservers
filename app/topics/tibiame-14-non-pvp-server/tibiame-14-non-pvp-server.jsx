import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-non-pvp-server');
}

export default function Tibiame14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-non-pvp-server" />;
}
