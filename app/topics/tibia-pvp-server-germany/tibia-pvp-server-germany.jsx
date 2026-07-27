import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-germany');
}

export default function TibiaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-germany" />;
}
