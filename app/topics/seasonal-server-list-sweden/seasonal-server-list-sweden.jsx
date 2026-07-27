import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-sweden');
}

export default function SeasonalServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-sweden" />;
}
