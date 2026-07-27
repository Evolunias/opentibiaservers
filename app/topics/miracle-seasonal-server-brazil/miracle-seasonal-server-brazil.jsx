import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-brazil');
}

export default function MiracleSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-brazil" />;
}
