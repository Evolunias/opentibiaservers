import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-open-tibia');
}

export default function OldSchoolTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-open-tibia" />;
}
