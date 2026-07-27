import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe');
}

export default function ThorniaPvpeKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe" />;
}
