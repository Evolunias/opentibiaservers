import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-uk');
}

export default function ArcaniarlSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-uk" />;
}
