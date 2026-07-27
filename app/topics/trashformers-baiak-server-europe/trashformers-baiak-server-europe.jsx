import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-europe');
}

export default function TrashformersBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-europe" />;
}
