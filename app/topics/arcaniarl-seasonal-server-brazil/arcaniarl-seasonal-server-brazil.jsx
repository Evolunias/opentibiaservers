import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-brazil');
}

export default function ArcaniarlSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-brazil" />;
}
