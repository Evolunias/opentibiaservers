import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-south-america');
}

export default function TibiaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-south-america" />;
}
