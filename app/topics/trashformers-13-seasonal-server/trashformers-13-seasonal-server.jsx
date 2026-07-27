import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-seasonal-server');
}

export default function Trashformers13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-seasonal-server" />;
}
