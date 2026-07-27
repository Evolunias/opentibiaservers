import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe');
}

export default function KasteriaPvpeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe" />;
}
