import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-sweden');
}

export default function AureraGlobalSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-sweden" />;
}
