import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-9-6-evo-server');
}

export default function Trashformers96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-9-6-evo-server" />;
}
