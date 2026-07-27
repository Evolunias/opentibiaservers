import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-mexico');
}

export default function NtoStarSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-mexico" />;
}
