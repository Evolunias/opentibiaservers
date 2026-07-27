import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-canada');
}

export default function TrashformersPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-canada" />;
}
