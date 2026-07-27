import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-latin-america');
}

export default function TrashformersSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-latin-america" />;
}
