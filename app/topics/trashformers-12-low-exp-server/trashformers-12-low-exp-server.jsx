import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-low-exp-server');
}

export default function Trashformers12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-low-exp-server" />;
}
