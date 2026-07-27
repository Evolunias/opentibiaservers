import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-1-low-exp-server');
}

export default function Trashformers71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-1-low-exp-server" />;
}
