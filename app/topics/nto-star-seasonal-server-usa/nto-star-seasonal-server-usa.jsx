import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-usa');
}

export default function NtoStarSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-usa" />;
}
