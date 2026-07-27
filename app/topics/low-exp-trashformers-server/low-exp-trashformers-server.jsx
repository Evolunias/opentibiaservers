import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-trashformers-server');
}

export default function LowExpTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-trashformers-server" />;
}
