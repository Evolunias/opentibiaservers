import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-argentina');
}

export default function TrashformersFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-argentina" />;
}
