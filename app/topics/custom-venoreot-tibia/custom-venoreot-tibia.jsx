import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-tibia');
}

export default function CustomVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-tibia" />;
}
