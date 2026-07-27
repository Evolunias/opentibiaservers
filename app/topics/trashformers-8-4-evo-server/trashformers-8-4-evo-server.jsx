import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-4-evo-server');
}

export default function Trashformers84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-4-evo-server" />;
}
