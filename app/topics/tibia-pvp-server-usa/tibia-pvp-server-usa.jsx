import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-usa');
}

export default function TibiaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-usa" />;
}
