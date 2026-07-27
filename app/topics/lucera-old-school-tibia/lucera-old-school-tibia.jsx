import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-old-school-tibia');
}

export default function LuceraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="lucera-old-school-tibia" />;
}
