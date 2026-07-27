import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-canada');
}

export default function TibiaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-canada" />;
}
