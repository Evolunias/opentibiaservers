import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-open-tibia');
}

export default function CustomVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-open-tibia" />;
}
