import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-uk');
}

export default function TibiascapeSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-uk" />;
}
