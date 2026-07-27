import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-france');
}

export default function RealeraSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-france" />;
}
