import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-low-exp-server');
}

export default function Trashformers14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-low-exp-server" />;
}
