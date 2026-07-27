import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-evo-servers');
}

export default function Trashformers13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-evo-servers" />;
}
