import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-canada');
}

export default function TrashformersBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-canada" />;
}
