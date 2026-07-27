import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-old-school-tibia');
}

export default function JameraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="jamera-old-school-tibia" />;
}
