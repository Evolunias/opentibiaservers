import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-germany');
}

export default function ElderaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-germany" />;
}
