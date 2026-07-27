import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-tibia');
}

export default function OldSchoolVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-tibia" />;
}
