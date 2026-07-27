import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-open-tibia');
}

export default function OldSchoolTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-open-tibia" />;
}
