import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-south-america');
}

export default function KasteriaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-south-america" />;
}
