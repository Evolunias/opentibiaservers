import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-poland');
}

export default function ArcaniarlSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-poland" />;
}
