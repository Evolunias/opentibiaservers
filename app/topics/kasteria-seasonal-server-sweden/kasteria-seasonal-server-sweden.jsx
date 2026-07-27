import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-sweden');
}

export default function KasteriaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-sweden" />;
}
