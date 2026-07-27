import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-9-6-seasonal-server');
}

export default function Trashformers96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-9-6-seasonal-server" />;
}
