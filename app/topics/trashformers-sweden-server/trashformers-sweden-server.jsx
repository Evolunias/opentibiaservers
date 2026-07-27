import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-sweden-server');
}

export default function TrashformersSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-sweden-server" />;
}
