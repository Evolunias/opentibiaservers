import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-argentina');
}

export default function TrashformersRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-argentina" />;
}
