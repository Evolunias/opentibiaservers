import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-brazil');
}

export default function ElderaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-brazil" />;
}
