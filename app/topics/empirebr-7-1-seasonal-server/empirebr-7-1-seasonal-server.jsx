import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-seasonal-server');
}

export default function Empirebr71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-seasonal-server" />;
}
