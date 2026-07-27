import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-seasonal-server');
}

export default function Thaisot74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-seasonal-server" />;
}
