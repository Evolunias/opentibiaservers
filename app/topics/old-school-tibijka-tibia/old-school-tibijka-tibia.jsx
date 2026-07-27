import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-tibia');
}

export default function OldSchoolTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-tibia" />;
}
