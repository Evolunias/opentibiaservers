import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-mexico');
}

export default function MiracleSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-mexico" />;
}
