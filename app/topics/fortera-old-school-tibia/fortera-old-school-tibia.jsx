import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-old-school-tibia');
}

export default function ForteraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="fortera-old-school-tibia" />;
}
