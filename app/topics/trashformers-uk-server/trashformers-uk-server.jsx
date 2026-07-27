import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-uk-server');
}

export default function TrashformersUkServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-uk-server" />;
}
