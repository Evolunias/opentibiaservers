import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-europe');
}

export default function TrashformersFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-europe" />;
}
