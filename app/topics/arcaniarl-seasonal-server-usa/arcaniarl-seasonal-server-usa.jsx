import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-usa');
}

export default function ArcaniarlSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-usa" />;
}
