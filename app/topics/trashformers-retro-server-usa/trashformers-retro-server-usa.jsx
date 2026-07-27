import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-usa');
}

export default function TrashformersRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-usa" />;
}
