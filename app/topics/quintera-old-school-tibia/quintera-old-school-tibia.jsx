import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-old-school-tibia');
}

export default function QuinteraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="quintera-old-school-tibia" />;
}
