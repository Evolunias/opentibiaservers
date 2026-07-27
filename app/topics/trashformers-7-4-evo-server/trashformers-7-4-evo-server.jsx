import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-4-evo-server');
}

export default function Trashformers74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-4-evo-server" />;
}
