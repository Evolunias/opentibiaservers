import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-old-school-tibia');
}

export default function PytheraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="pythera-old-school-tibia" />;
}
