import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-brazil-servers');
}

export default function TrashformersBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-brazil-servers" />;
}
