import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-open-tibia');
}

export default function BestVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-open-tibia" />;
}
