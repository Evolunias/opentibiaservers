import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-seasonal-server');
}

export default function Trashformers15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-seasonal-server" />;
}
