import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-tibia');
}

export default function BestVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-tibia" />;
}
