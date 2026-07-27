import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-brazil-server');
}

export default function TrashformersBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-brazil-server" />;
}
