import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-evo-server');
}

export default function Trashformers13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-evo-server" />;
}
