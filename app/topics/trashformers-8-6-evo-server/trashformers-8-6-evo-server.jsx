import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-6-evo-server');
}

export default function Trashformers86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-6-evo-server" />;
}
