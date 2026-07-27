import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-72-seasonal-server');
}

export default function Thaisot772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-72-seasonal-server" />;
}
