import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-seasonal-server');
}

export default function Empirebr86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-seasonal-server" />;
}
