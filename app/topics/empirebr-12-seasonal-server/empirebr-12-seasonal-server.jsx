import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-seasonal-server');
}

export default function Empirebr12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-seasonal-server" />;
}
