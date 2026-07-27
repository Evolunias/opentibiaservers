import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-open-tibia');
}

export default function OldSchoolTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-open-tibia" />;
}
