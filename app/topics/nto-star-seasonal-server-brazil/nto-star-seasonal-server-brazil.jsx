import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-brazil');
}

export default function NtoStarSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-brazil" />;
}
