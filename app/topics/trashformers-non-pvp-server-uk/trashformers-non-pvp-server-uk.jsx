import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-uk');
}

export default function TrashformersNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-uk" />;
}
