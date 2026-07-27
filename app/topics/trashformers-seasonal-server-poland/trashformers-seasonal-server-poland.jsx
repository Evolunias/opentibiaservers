import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-poland');
}

export default function TrashformersSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-poland" />;
}
