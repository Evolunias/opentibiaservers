import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-old-school-tibia');
}

export default function ReneraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="renera-old-school-tibia" />;
}
