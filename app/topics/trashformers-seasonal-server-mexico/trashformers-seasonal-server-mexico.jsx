import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-mexico');
}

export default function TrashformersSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-mexico" />;
}
