import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-europe');
}

export default function MiracleSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-europe" />;
}
