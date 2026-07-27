import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-high-exp-server');
}

export default function Trashformers11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-high-exp-server" />;
}
