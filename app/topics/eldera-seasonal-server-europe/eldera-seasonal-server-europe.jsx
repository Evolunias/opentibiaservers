import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-europe');
}

export default function ElderaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-europe" />;
}
