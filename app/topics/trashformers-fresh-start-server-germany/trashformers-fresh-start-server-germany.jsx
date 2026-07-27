import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-germany');
}

export default function TrashformersFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-germany" />;
}
