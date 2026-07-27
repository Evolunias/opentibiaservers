import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-argentina');
}

export default function TibiaraPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-argentina" />;
}
