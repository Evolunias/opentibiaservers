import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-north-america');
}

export default function MiracleSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-north-america" />;
}
