import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-france');
}

export default function OlderaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-france" />;
}
