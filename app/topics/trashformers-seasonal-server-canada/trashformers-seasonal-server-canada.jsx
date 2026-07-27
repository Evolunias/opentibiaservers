import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-canada');
}

export default function TrashformersSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-canada" />;
}
