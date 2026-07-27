import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-high-exp-server');
}

export default function Trashformers14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-high-exp-server" />;
}
