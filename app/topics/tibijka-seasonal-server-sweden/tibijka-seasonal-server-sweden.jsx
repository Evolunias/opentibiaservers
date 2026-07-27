import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-sweden');
}

export default function TibijkaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-sweden" />;
}
