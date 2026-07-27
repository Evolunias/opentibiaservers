import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-south-america');
}

export default function TibiaraPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-south-america" />;
}
