import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-europe');
}

export default function ArcaniarlSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-europe" />;
}
