import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-evo-server');
}

export default function Trashformers81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-evo-server" />;
}
