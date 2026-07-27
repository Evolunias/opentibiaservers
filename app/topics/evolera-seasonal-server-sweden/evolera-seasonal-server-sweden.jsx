import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-sweden');
}

export default function EvoleraSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-sweden" />;
}
