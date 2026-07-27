import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-evo-server');
}

export default function Trashformers11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-evo-server" />;
}
