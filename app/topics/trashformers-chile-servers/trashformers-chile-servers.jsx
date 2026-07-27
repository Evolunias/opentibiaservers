import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-chile-servers');
}

export default function TrashformersChileServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-chile-servers" />;
}
