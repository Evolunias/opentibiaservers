import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-old-school-tibia');
}

export default function MeneraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="menera-old-school-tibia" />;
}
