import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-poland');
}

export default function TrashformersPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-poland" />;
}
