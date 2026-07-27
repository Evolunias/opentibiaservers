import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-france');
}

export default function ElderaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-france" />;
}
