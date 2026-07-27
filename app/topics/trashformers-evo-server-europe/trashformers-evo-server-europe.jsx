import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-europe');
}

export default function TrashformersEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-europe" />;
}
