import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-france-server');
}

export default function TrashformersFranceServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-france-server" />;
}
