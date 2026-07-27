import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-6-evo-server');
}

export default function Trashformers76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-6-evo-server" />;
}
