import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-old-school-tibia');
}

export default function UniteraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="unitera-old-school-tibia" />;
}
