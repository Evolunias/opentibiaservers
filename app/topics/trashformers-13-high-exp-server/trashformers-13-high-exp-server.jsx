import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-high-exp-server');
}

export default function Trashformers13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-high-exp-server" />;
}
