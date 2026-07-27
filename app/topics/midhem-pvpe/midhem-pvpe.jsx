import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe');
}

export default function MidhemPvpeKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe" />;
}
