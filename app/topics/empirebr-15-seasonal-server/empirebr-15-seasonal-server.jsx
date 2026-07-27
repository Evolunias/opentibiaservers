import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-seasonal-server');
}

export default function Empirebr15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-seasonal-server" />;
}
