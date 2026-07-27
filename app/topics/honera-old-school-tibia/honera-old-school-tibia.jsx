import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-old-school-tibia');
}

export default function HoneraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="honera-old-school-tibia" />;
}
