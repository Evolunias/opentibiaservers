import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-sweden');
}

export default function RealestaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-sweden" />;
}
