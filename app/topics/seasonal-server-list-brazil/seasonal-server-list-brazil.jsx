import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-brazil');
}

export default function SeasonalServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-brazil" />;
}
