import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-old-school-tibia');
}

export default function IridiaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="iridia-old-school-tibia" />;
}
