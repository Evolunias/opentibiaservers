import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-guide');
}

export default function CarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="carlinot-guide" />;
}
