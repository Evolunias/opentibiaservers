import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-fun-server');
}

export default function TrashformersFunServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-fun-server" />;
}
