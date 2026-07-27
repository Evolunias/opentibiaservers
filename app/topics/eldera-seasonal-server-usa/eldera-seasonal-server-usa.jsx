import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-usa');
}

export default function ElderaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-usa" />;
}
