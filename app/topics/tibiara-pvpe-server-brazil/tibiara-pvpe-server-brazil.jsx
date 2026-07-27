import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-brazil');
}

export default function TibiaraPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-brazil" />;
}
