import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-germany');
}

export default function AlasteraPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-germany" />;
}
