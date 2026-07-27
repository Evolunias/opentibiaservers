import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-uk');
}

export default function MiracleSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-uk" />;
}
