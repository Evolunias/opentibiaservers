import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-old-school-tibia');
}

export default function SameraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="samera-old-school-tibia" />;
}
