import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-1-evo-server');
}

export default function Trashformers71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-1-evo-server" />;
}
