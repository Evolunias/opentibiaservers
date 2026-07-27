import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-brazil');
}

export default function TibiaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-brazil" />;
}
