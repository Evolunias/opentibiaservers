import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-mexico-servers');
}

export default function TrashformersMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-mexico-servers" />;
}
