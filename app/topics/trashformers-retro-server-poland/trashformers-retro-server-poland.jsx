import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-poland');
}

export default function TrashformersRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-poland" />;
}
