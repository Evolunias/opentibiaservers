import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-france');
}

export default function MiracleSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-france" />;
}
