import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-latin-america-servers');
}

export default function TrashformersLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-latin-america-servers" />;
}
