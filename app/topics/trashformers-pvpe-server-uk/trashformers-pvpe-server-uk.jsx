import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-uk');
}

export default function TrashformersPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-uk" />;
}
