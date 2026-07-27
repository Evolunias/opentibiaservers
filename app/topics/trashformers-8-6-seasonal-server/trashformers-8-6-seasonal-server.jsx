import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-6-seasonal-server');
}

export default function Trashformers86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-6-seasonal-server" />;
}
