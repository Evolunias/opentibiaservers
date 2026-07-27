import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fresh-start-server-france');
}

export default function TrashformersFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fresh-start-server-france" />;
}
