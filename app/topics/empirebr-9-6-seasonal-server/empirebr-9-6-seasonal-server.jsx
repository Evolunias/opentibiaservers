import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-seasonal-server');
}

export default function Empirebr96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-seasonal-server" />;
}
