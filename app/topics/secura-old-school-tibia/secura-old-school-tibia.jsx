import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-old-school-tibia');
}

export default function SecuraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="secura-old-school-tibia" />;
}
