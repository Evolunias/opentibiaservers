import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe');
}

export default function EvoleraPvpeKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe" />;
}
