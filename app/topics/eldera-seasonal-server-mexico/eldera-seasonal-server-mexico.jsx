import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-mexico');
}

export default function ElderaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-mexico" />;
}
