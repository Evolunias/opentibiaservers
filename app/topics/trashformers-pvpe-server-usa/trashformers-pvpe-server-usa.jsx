import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-usa');
}

export default function TrashformersPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-usa" />;
}
