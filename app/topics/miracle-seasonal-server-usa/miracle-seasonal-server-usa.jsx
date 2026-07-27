import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-usa');
}

export default function MiracleSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-usa" />;
}
