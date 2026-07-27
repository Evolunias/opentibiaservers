import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-north-america');
}

export default function TrashformersSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-north-america" />;
}
