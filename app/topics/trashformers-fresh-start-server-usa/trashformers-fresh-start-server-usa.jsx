import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-usa');
}

export default function TrashformersFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-usa" />;
}
