import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-seasonal-server');
}

export default function Empirebr84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-seasonal-server" />;
}
