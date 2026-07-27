import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-trashformers-server');
}

export default function EvoTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="evo-trashformers-server" />;
}
