import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-north-america');
}

export default function TibiaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-north-america" />;
}
