import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-seasonal-server');
}

export default function Eldera76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-seasonal-server" />;
}
