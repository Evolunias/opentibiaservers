import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-latin-america-server');
}

export default function TrashformersLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-latin-america-server" />;
}
