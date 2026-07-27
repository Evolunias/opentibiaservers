import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-canada');
}

export default function ArcaniarlSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-canada" />;
}
