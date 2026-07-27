import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-france');
}

export default function ArcaniarlSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-france" />;
}
