import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-seasonal-server');
}

export default function Trashformers100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-seasonal-server" />;
}
