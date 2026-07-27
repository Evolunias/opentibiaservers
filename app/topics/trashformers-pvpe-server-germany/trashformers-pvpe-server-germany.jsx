import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-germany');
}

export default function TrashformersPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-germany" />;
}
