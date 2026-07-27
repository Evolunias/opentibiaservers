import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-trashformers-servers');
}

export default function EvoTrashformersServersKeywordPage() {
  return <StaticKeywordPage slug="evo-trashformers-servers" />;
}
