import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-open-tibia');
}

export default function OldSchoolTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-open-tibia" />;
}
