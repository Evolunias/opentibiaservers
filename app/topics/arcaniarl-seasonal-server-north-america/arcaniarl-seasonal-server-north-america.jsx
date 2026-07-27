import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-north-america');
}

export default function ArcaniarlSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-north-america" />;
}
