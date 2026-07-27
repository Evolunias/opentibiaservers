import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-uk');
}

export default function TibiaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-uk" />;
}
