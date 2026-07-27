import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-seasonal-server-sweden');
}

export default function TrashformersSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-seasonal-server-sweden" />;
}
