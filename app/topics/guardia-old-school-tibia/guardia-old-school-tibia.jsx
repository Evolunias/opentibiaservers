import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-old-school-tibia');
}

export default function GuardiaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="guardia-old-school-tibia" />;
}
