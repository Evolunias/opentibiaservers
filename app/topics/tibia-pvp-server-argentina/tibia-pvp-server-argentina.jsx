import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-argentina');
}

export default function TibiaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-argentina" />;
}
