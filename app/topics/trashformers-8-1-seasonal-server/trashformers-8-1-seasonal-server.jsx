import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-seasonal-server');
}

export default function Trashformers81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-seasonal-server" />;
}
