import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-north-america');
}

export default function TrashformersFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-north-america" />;
}
