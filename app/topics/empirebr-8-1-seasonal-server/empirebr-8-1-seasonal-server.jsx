import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-seasonal-server');
}

export default function Empirebr81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-seasonal-server" />;
}
