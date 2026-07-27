import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-sweden');
}

export default function TibianusSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-sweden" />;
}
