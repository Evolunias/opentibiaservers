import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-1-seasonal-server');
}

export default function Trashformers71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-1-seasonal-server" />;
}
