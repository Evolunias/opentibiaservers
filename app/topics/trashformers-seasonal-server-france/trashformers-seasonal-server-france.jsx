import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-france');
}

export default function TrashformersSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-france" />;
}
