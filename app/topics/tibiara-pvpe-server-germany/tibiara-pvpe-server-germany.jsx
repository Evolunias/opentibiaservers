import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-germany');
}

export default function TibiaraPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-germany" />;
}
