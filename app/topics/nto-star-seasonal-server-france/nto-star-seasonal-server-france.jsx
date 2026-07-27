import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-france');
}

export default function NtoStarSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-france" />;
}
