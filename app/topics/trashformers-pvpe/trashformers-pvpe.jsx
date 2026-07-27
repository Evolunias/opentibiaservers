import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe');
}

export default function TrashformersPvpeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe" />;
}
