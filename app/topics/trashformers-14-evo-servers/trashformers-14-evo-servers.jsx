import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-evo-servers');
}

export default function Trashformers14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-evo-servers" />;
}
