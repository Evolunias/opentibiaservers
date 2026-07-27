import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-evo-server');
}

export default function Trashformers12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-evo-server" />;
}
