import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-uk-servers');
}

export default function TrashformersUkServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-uk-servers" />;
}
