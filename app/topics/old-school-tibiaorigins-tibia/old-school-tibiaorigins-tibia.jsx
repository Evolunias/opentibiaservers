import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-tibia');
}

export default function OldSchoolTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-tibia" />;
}
