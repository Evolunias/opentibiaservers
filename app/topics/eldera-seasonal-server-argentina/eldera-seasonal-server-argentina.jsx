import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-argentina');
}

export default function ElderaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-argentina" />;
}
