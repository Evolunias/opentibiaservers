import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-south-america');
}

export default function TrashformersSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-south-america" />;
}
