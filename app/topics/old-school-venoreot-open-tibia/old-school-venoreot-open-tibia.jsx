import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-open-tibia');
}

export default function OldSchoolVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-open-tibia" />;
}
