import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-argentina');
}

export default function AlasteraPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-argentina" />;
}
