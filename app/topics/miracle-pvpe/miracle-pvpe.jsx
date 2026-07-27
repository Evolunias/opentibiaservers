import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe');
}

export default function MiraclePvpeKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe" />;
}
