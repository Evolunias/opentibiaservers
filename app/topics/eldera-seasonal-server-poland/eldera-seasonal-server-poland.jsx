import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-poland');
}

export default function ElderaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-poland" />;
}
