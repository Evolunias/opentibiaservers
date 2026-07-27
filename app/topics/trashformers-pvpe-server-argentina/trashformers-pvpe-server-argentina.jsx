import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-argentina');
}

export default function TrashformersPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-argentina" />;
}
