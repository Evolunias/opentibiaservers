import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-seasonal-server');
}

export default function Empirebr13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-seasonal-server" />;
}
