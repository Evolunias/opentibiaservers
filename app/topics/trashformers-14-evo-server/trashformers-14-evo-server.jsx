import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-evo-server');
}

export default function Trashformers14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-evo-server" />;
}
