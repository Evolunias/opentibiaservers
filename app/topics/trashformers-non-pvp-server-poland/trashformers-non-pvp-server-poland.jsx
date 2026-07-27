import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-poland');
}

export default function TrashformersNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-poland" />;
}
