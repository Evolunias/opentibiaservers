import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-germany');
}

export default function TrashformersNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-germany" />;
}
