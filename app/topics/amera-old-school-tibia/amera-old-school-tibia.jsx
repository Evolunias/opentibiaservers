import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-old-school-tibia');
}

export default function AmeraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="amera-old-school-tibia" />;
}
