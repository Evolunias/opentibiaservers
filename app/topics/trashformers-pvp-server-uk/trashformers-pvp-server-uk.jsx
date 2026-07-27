import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-uk');
}

export default function TrashformersPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-uk" />;
}
