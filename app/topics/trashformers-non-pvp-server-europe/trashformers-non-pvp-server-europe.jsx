import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-europe');
}

export default function TrashformersNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-europe" />;
}
