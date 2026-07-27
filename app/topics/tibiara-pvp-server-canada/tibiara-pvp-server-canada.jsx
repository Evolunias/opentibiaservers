import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-canada');
}

export default function TibiaraPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-canada" />;
}
