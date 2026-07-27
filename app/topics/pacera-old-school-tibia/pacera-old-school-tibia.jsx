import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-old-school-tibia');
}

export default function PaceraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="pacera-old-school-tibia" />;
}
