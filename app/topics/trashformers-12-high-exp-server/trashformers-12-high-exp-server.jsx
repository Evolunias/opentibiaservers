import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-high-exp-server');
}

export default function Trashformers12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-high-exp-server" />;
}
