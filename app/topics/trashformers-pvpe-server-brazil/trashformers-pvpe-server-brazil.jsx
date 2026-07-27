import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-brazil');
}

export default function TrashformersPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-brazil" />;
}
