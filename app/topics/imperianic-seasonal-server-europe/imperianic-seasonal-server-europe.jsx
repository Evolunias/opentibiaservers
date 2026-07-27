import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-europe');
}

export default function ImperianicSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-europe" />;
}
