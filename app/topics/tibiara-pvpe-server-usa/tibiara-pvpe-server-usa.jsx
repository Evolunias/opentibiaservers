import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-usa');
}

export default function TibiaraPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-usa" />;
}
