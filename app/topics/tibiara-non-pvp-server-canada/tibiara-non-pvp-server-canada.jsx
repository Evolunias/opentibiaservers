import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-canada');
}

export default function TibiaraNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-canada" />;
}
