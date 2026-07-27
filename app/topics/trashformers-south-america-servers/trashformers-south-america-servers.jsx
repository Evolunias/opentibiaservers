import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-south-america-servers');
}

export default function TrashformersSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-south-america-servers" />;
}
