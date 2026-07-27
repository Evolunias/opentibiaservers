import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-chile-server');
}

export default function TrashformersChileServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-chile-server" />;
}
