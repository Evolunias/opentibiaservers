import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-sweden-servers');
}

export default function TrashformersSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-sweden-servers" />;
}
