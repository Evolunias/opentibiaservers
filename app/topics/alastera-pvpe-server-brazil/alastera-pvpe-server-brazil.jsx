import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-brazil');
}

export default function AlasteraPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-brazil" />;
}
