import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-germany');
}

export default function ArcaniarlSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-germany" />;
}
