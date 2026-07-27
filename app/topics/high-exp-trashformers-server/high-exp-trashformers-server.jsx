import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-trashformers-server');
}

export default function HighExpTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-trashformers-server" />;
}
