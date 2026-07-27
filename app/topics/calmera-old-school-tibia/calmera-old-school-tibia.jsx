import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-old-school-tibia');
}

export default function CalmeraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="calmera-old-school-tibia" />;
}
