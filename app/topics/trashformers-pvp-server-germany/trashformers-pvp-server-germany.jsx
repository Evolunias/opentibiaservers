import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-germany');
}

export default function TrashformersPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-germany" />;
}
