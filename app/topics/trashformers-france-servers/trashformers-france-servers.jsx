import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-france-servers');
}

export default function TrashformersFranceServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-france-servers" />;
}
