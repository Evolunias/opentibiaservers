import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-poland');
}

export default function TrashformersPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-poland" />;
}
