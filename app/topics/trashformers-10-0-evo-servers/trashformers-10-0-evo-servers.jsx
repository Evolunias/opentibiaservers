import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-evo-servers');
}

export default function Trashformers100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-evo-servers" />;
}
