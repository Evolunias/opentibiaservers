import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-latin-america');
}

export default function MiracleSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-latin-america" />;
}
