import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-sweden');
}

export default function RealeraSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-sweden" />;
}
