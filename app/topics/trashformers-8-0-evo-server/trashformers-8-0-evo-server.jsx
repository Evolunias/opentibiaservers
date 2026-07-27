import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-0-evo-server');
}

export default function Trashformers80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-0-evo-server" />;
}
