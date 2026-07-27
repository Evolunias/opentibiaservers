import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-4-low-exp-server');
}

export default function Trashformers84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-4-low-exp-server" />;
}
