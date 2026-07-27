import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-uk');
}

export default function ImperianicSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-uk" />;
}
