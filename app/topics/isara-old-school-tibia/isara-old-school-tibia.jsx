import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-old-school-tibia');
}

export default function IsaraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="isara-old-school-tibia" />;
}
