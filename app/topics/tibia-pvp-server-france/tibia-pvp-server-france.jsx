import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-france');
}

export default function TibiaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-france" />;
}
