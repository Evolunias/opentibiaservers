import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-mexico');
}

export default function AlasteraPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-mexico" />;
}
