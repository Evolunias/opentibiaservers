import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-evo-server');
}

export default function Trashformers15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-evo-server" />;
}
