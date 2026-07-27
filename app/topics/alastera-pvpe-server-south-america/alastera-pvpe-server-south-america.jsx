import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-south-america');
}

export default function AlasteraPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-south-america" />;
}
