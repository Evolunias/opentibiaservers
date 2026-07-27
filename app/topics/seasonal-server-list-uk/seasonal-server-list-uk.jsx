import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-uk');
}

export default function SeasonalServerListUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-uk" />;
}
