import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-uk');
}

export default function TrashformersFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-uk" />;
}
