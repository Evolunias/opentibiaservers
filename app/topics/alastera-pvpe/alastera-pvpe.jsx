import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe');
}

export default function AlasteraPvpeKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe" />;
}
