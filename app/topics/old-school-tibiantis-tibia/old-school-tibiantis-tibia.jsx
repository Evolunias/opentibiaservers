import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-tibia');
}

export default function OldSchoolTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-tibia" />;
}
