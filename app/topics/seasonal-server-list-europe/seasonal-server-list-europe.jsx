import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-europe');
}

export default function SeasonalServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-europe" />;
}
