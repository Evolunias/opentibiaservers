import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-uk');
}

export default function TibijkaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-uk" />;
}
