import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-canada');
}

export default function TibiameNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-canada" />;
}
