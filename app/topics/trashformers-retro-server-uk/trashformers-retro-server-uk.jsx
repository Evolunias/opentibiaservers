import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-uk');
}

export default function TrashformersRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-uk" />;
}
