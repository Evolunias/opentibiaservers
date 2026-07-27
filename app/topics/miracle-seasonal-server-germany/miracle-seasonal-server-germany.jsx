import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-germany');
}

export default function MiracleSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-germany" />;
}
