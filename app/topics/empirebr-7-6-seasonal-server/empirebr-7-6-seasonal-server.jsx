import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-seasonal-server');
}

export default function Empirebr76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-seasonal-server" />;
}
