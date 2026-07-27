import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-4-seasonal-server');
}

export default function Trashformers84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-4-seasonal-server" />;
}
