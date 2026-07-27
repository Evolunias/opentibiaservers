import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-low-exp-server');
}

export default function Trashformers15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-low-exp-server" />;
}
