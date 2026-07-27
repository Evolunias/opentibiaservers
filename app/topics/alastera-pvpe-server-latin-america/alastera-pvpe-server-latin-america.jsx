import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-latin-america');
}

export default function AlasteraPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-latin-america" />;
}
