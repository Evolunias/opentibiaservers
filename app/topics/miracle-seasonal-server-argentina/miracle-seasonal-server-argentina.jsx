import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-argentina');
}

export default function MiracleSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-argentina" />;
}
