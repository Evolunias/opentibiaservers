import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-latin-america');
}

export default function ElderaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-latin-america" />;
}
