import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-seasonal-server');
}

export default function Empirebr74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-seasonal-server" />;
}
