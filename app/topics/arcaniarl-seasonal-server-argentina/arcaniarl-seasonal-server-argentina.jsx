import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-argentina');
}

export default function ArcaniarlSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-argentina" />;
}
