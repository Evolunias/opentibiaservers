import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-season');
}

export default function CarlinotSeasonKeywordPage() {
  return <StaticKeywordPage slug="carlinot-season" />;
}
