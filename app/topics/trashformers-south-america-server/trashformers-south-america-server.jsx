import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-south-america-server');
}

export default function TrashformersSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-south-america-server" />;
}
