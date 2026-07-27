import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-argentina');
}

export default function NtoStarSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-argentina" />;
}
