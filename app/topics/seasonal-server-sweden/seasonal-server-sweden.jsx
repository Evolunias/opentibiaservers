import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-sweden');
}

export default function SeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-sweden" />;
}
