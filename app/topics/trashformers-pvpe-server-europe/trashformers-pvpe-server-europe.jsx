import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-europe');
}

export default function TrashformersPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-europe" />;
}
