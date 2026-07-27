import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-latin-america');
}

export default function TibiaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-latin-america" />;
}
