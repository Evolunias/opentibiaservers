import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-old-school-tibia');
}

export default function TenebraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="tenebra-old-school-tibia" />;
}
