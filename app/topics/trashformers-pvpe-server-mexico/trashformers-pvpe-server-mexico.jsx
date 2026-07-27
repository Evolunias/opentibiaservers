import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-mexico');
}

export default function TrashformersPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-mexico" />;
}
