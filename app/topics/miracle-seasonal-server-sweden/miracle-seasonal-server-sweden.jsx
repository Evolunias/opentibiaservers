import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-sweden');
}

export default function MiracleSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-sweden" />;
}
