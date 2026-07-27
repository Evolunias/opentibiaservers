import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-seasonal-server');
}

export default function Empirebr11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-seasonal-server" />;
}
