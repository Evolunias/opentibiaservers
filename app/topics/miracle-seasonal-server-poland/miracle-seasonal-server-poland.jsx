import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-poland');
}

export default function MiracleSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-poland" />;
}
