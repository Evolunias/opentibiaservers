import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-north-america');
}

export default function AlasteraPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-north-america" />;
}
