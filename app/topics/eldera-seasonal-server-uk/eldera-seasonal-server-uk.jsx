import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-uk');
}

export default function ElderaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-uk" />;
}
