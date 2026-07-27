import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-argentina');
}

export default function TrashformersSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-argentina" />;
}
