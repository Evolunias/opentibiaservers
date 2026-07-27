import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-mexico-server');
}

export default function TrashformersMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-mexico-server" />;
}
