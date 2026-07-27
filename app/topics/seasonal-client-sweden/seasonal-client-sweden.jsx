import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-sweden');
}

export default function SeasonalClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-sweden" />;
}
