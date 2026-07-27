import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-mexico');
}

export default function TibiaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-mexico" />;
}
