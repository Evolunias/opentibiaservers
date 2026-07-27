import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-europe');
}

export default function SeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-europe" />;
}
