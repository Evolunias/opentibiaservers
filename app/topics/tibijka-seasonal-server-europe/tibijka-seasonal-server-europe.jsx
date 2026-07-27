import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-europe');
}

export default function TibijkaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-europe" />;
}
