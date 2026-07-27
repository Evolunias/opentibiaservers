import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-mexico');
}

export default function ArcaniarlSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-mexico" />;
}
