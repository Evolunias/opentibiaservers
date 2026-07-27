import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-72-seasonal-server');
}

export default function Empirebr772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-72-seasonal-server" />;
}
