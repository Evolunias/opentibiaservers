import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-germany');
}

export default function TrashformersRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-germany" />;
}
