import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-evo-server');
}

export default function Trashformers100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-evo-server" />;
}
