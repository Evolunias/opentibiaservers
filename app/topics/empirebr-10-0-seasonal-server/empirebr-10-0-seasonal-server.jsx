import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-seasonal-server');
}

export default function Empirebr100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-seasonal-server" />;
}
