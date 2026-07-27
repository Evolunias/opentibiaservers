import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-old-school-tibia');
}

export default function FideraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="fidera-old-school-tibia" />;
}
